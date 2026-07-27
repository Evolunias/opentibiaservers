import NovaWorldKeywordPage, { generateMetadata } from './nova-world';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NovaWorldKeywordPage />;
}
