import CustomElderaPrivateServerKeywordPage, { generateMetadata } from './custom-eldera-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomElderaPrivateServerKeywordPage />;
}
