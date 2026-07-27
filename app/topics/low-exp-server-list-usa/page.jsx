import LowExpServerListUsaKeywordPage, { generateMetadata } from './low-exp-server-list-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpServerListUsaKeywordPage />;
}
