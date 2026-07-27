import AlasteraEvoServerCanadaKeywordPage, { generateMetadata } from './alastera-evo-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraEvoServerCanadaKeywordPage />;
}
