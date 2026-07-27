import AlasteraLowExpServerFranceKeywordPage, { generateMetadata } from './alastera-low-exp-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraLowExpServerFranceKeywordPage />;
}
