import RefugiaKeywordPage, { generateMetadata } from './refugia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RefugiaKeywordPage />;
}
