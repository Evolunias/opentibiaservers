import LowExpServerNorthAmericaKeywordPage, { generateMetadata } from './low-exp-server-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpServerNorthAmericaKeywordPage />;
}
