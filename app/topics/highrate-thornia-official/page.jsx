import HighrateThorniaOfficialKeywordPage, { generateMetadata } from './highrate-thornia-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateThorniaOfficialKeywordPage />;
}
