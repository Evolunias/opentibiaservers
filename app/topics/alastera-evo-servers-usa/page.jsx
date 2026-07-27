import AlasteraEvoServersUsaKeywordPage, { generateMetadata } from './alastera-evo-servers-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraEvoServersUsaKeywordPage />;
}
