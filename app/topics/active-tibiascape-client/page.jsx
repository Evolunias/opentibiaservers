import ActiveTibiascapeClientKeywordPage, { generateMetadata } from './active-tibiascape-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibiascapeClientKeywordPage />;
}
