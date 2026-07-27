import NoResetXanteriaOtKeywordPage, { generateMetadata } from './no-reset-xanteria-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetXanteriaOtKeywordPage />;
}
