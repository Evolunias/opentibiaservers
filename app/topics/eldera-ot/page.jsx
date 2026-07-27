import ElderaOtKeywordPage, { generateMetadata } from './eldera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ElderaOtKeywordPage />;
}
