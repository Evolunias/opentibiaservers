import LowExpServerListNorthAmericaKeywordPage, { generateMetadata } from './low-exp-server-list-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpServerListNorthAmericaKeywordPage />;
}
