import OtServersCanadaKeywordPage, { generateMetadata } from './ot-servers-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtServersCanadaKeywordPage />;
}
