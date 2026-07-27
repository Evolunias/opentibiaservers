import ActiveThorniaOfficialKeywordPage, { generateMetadata } from './active-thornia-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveThorniaOfficialKeywordPage />;
}
