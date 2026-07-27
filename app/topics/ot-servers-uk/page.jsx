import OtServersUkKeywordPage, { generateMetadata } from './ot-servers-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtServersUkKeywordPage />;
}
