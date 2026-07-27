import OfficialThorniaKeywordPage, { generateMetadata } from './official-thornia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialThorniaKeywordPage />;
}
