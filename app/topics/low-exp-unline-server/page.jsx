import LowExpUnlineServerKeywordPage, { generateMetadata } from './low-exp-unline-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpUnlineServerKeywordPage />;
}
