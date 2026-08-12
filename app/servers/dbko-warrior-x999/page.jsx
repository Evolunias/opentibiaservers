import DbkoWarriorX999ServerReviewPage, { generateMetadata } from './dbko-warrior-x999';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DbkoWarriorX999ServerReviewPage />;
}
