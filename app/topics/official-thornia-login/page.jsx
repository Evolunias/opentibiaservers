import OfficialThorniaLoginKeywordPage, { generateMetadata } from './official-thornia-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialThorniaLoginKeywordPage />;
}
