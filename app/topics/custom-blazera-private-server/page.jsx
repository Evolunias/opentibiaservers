import CustomBlazeraPrivateServerKeywordPage, { generateMetadata } from './custom-blazera-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomBlazeraPrivateServerKeywordPage />;
}
