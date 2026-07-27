import HighExpServersUsaKeywordPage, { generateMetadata } from './high-exp-servers-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpServersUsaKeywordPage />;
}
