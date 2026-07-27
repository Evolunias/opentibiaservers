import NoResetXanteriaOtsKeywordPage, { generateMetadata } from './no-reset-xanteria-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetXanteriaOtsKeywordPage />;
}
