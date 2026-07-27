import ElderaSwedenServerKeywordPage, { generateMetadata } from './eldera-sweden-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ElderaSwedenServerKeywordPage />;
}
