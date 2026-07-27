import CustomElderaServerKeywordPage, { generateMetadata } from './custom-eldera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomElderaServerKeywordPage />;
}
