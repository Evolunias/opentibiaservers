import AlasteraRetroServerFranceKeywordPage, { generateMetadata } from './alastera-retro-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraRetroServerFranceKeywordPage />;
}
