import HighExpServerListUsaKeywordPage, { generateMetadata } from './high-exp-server-list-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpServerListUsaKeywordPage />;
}
