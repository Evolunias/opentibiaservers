import LongTermPage, { generateMetadata } from './long-term';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LongTermPage />;
}
