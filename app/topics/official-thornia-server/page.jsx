import OfficialThorniaServerKeywordPage, { generateMetadata } from './official-thornia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialThorniaServerKeywordPage />;
}
