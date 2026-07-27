import RealMapTrashformersRulesKeywordPage, { generateMetadata } from './real-map-trashformers-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTrashformersRulesKeywordPage />;
}
