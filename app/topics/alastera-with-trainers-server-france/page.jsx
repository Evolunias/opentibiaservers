import AlasteraWithTrainersServerFranceKeywordPage, { generateMetadata } from './alastera-with-trainers-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraWithTrainersServerFranceKeywordPage />;
}
