import IglaotsOffseasonServerReviewPage, { generateMetadata } from './iglaots-offseason';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <IglaotsOffseasonServerReviewPage />;
}
