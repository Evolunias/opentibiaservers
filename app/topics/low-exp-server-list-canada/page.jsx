import LowExpServerListCanadaKeywordPage, { generateMetadata } from './low-exp-server-list-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpServerListCanadaKeywordPage />;
}
