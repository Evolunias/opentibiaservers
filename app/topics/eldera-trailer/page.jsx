import ElderaTrailerKeywordPage, { generateMetadata } from './eldera-trailer';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ElderaTrailerKeywordPage />;
}
