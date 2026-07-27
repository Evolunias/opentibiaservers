import HighExpUnlineServerKeywordPage, { generateMetadata } from './high-exp-unline-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpUnlineServerKeywordPage />;
}
