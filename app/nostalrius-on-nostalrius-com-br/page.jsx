import NostalriusOnNostalriusComBrPage, { generateMetadata } from './nostalrius-on-nostalrius-com-br';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NostalriusOnNostalriusComBrPage />;
}
