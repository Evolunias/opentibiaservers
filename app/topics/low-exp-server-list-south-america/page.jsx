import LowExpServerListSouthAmericaKeywordPage, { generateMetadata } from './low-exp-server-list-south-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpServerListSouthAmericaKeywordPage />;
}
