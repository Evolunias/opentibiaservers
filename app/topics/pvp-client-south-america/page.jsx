import PvpClientSouthAmericaKeywordPage, { generateMetadata } from './pvp-client-south-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpClientSouthAmericaKeywordPage />;
}
