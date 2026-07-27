import ElderaResetKeywordPage, { generateMetadata } from './eldera-reset';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ElderaResetKeywordPage />;
}
