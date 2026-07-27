import CustomUnlineServerKeywordPage, { generateMetadata } from './custom-unline-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomUnlineServerKeywordPage />;
}
