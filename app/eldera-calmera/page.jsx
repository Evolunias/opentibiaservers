import ElderaCalmeraPage, { generateMetadata } from './eldera-calmera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ElderaCalmeraPage />;
}
