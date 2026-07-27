import ActiveTibiascapeKeywordPage, { generateMetadata } from './active-tibiascape';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibiascapeKeywordPage />;
}
