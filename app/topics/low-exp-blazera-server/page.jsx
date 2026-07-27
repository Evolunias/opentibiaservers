import LowExpBlazeraServerKeywordPage, { generateMetadata } from './low-exp-blazera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpBlazeraServerKeywordPage />;
}
