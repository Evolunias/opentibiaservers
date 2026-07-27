import ElderaOtServerKeywordPage, { generateMetadata } from './eldera-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ElderaOtServerKeywordPage />;
}
