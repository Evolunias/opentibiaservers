import NoResetTibiascapeOtKeywordPage, { generateMetadata } from './no-reset-tibiascape-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetTibiascapeOtKeywordPage />;
}
