import NoResetTibiascapeClientKeywordPage, { generateMetadata } from './no-reset-tibiascape-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetTibiascapeClientKeywordPage />;
}
