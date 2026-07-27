import ActiveTibiascapeOfficialKeywordPage, { generateMetadata } from './active-tibiascape-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibiascapeOfficialKeywordPage />;
}
