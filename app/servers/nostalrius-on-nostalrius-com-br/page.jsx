import NostalriusOnNostalriusComBrServerReviewPage, { generateMetadata } from './nostalrius-on-nostalrius-com-br';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NostalriusOnNostalriusComBrServerReviewPage />;
}
