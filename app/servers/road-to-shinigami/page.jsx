import RoadToShinigamiServerReviewPage, { generateMetadata } from './road-to-shinigami';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RoadToShinigamiServerReviewPage />;
}
