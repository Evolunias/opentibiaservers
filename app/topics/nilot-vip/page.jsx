import NilotVipKeywordPage, { generateMetadata } from './nilot-vip';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NilotVipKeywordPage />;
}
