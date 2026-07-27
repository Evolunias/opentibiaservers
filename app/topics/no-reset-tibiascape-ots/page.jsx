import NoResetTibiascapeOtsKeywordPage, { generateMetadata } from './no-reset-tibiascape-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetTibiascapeOtsKeywordPage />;
}
