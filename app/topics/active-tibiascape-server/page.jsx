import ActiveTibiascapeServerKeywordPage, { generateMetadata } from './active-tibiascape-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibiascapeServerKeywordPage />;
}
