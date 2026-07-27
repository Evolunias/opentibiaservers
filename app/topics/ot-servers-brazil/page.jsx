import OtServersBrazilKeywordPage, { generateMetadata } from './ot-servers-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtServersBrazilKeywordPage />;
}
